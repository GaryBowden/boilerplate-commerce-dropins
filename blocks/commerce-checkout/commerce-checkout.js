/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Dropin Tools
import { events } from '@dropins/tools/event-bus.js';
import { initializers } from '@dropins/tools/initializer.js';

// Checkout Dropin Modules
import { render as checkoutProvider } from '@dropins/storefront-checkout/render.js';
import * as checkoutApi from '@dropins/storefront-checkout/api.js';
import Checkout from '@dropins/storefront-checkout/containers/Checkout.js';

// Auth Dropin Modules
import { render as authProvider } from '@dropins/storefront-auth/render.js';
import * as authApi from '@dropins/storefront-auth/api.js';
import AuthCombine from '@dropins/storefront-auth/containers/AuthCombine.js';
import SignUp from '@dropins/storefront-auth/containers/SignUp.js';

import { render as orderConfirmationProvider } from '@dropins/storefront-order-confirmation/render.js';
import * as orderConfirmationApi from '@dropins/storefront-order-confirmation/api.js';
import OrderConfirmation from '@dropins/storefront-order-confirmation/containers/OrderConfirmation.js';

import { getUserTokenCookie } from '../../scripts/dropins.js';
import { createModal } from '../modal/modal.js';

export default async function decorate(block) {
  let modal = null;

  // Initialize Dropins
  initializers.register(checkoutApi.initialize, {});

  events.on(
    'authenticated',
    (isAuthenticated) => {
      if (isAuthenticated && modal) {
        modal.removeModal();
        modal = null;
      }
    },
    { eager: true },
  );

  // Display order confirmation
  events.on('checkout/order', (orderData) => {
    const token = getUserTokenCookie();
    const orderRef = token ? orderData.number : orderData.token;
    const encodedOrderRef = encodeURIComponent(orderRef);

    window.history.pushState(
      {},
      '',
      `/order-confirmation?orderRef=${encodedOrderRef}`,
    );

    checkoutProvider.unmount(block);

    initializers.register(orderConfirmationApi.initialize, {});

    const onSignUpClick = async ({
      inputsDefaultValueSet,
      addressesData,
    }) => {
      const signUpForm = document.createElement('div');

      authProvider.render(SignUp, {
        routeSignIn: () => '/customer/login',
        routeRedirectOnEmailConfirmationClose: () => '/customer/account',
        inputsDefaultValueSet,
        addressesData,
      })(signUpForm);

      modal = await createModal([signUpForm]);
      modal.showModal();
    };

    orderConfirmationProvider.render(OrderConfirmation, {
      orderRef,
      orderData,
      onSignUpClick,
      routeHome: () => '/',
      routeSupport: () => '/support',
    })(block);
  });

  const onSignInClick = async (initialEmailValue) => {
    const signInForm = document.createElement('div');

    authProvider.render(AuthCombine, {
      signInFormConfig: { renderSignUpLink: true, initialEmailValue },
      signUpFormConfig: {},
      resetPasswordFormConfig: {},
    })(signInForm);

    modal = await createModal([signInForm]);
    modal.showModal();
  };

  return checkoutProvider.render(Checkout, {
    onSignInClick,
    onSignOutClick: () => {
      authApi.revokeCustomerToken();
    },
    routeHome: () => '/',
    routeCart: () => '/cart',
    slots: {
      PaymentMethods: async (context) => {
        context.addPaymentMethodHandler('checkmo', {
          render: (ctx, element) => {
            if (element) {
              // clear the element first
              element.innerHTML = '';
            }

            // Optionally, create and render some custom content here.
            // const $content = document.createElement('div');
            // $content.innerText = 'Custom Check / Money order handler';
            // ctx.appendHTMLElement($content);
          },
        });
      },
    },
  })(block);
}
