<template>
  <div>
    <PayPal amount="10.00" currency="USD" :client="credentials" env="sandbox" :items="myItems"> </PayPal>
  </div>
</template>

<script>
import PayPal from "vue-paypal-checkout";
export default {
  components: {
    PayPal,
  },
  data() {
    return {
      credentials: {
        sandbox: "<sandbox client id>",
        production: "<production client id>",
      },
      myItems: [
        {
          "name": "hat",
          "description": "Brown hat.",
          "quantity": "1",
          "price": "5",
          "currency": "USD"
          },
          {
          "name": "handbag",
          "description": "Black handbag.",
          "quantity": "1",
          "price": "5",
          "currency": "USD"
          }
      ]
    };
  },
};
</script>

<style></style>
