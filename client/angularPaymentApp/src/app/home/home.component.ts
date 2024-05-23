import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  paymentHandler: any = null;
  //methods 
   
  constructor(private checkout: CheckoutService){}

  ngOnInit(){
    this.invokeStripe()
  }
  makepayment(amount: number){ 
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:"pk_test_51PJ9z2SEggDqVS5cv89SlEYFr7rkwhJFuJMkX8P44ipFQhJsU1o70F6qEuW6N9ZIWB3hAWGjNVD9u484pDMdNyEm00FkQ0uG5U",
      locale: 'auto',
      token: function(stripeToken: any){
        console.log(stripeToken)

        PaymentStripe(stripeToken);
      }
    });

    const PaymentStripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data)
      })
    }

    paymentHandler.open({
      name: "coding coding",
      description: "A SIMPLE site",
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51PJ9z2SEggDqVS5cv89SlEYFr7rkwhJFuJMkX8P44ipFQhJsU1o70F6qEuW6N9ZIWB3hAWGjNVD9u484pDMdNyEm00FkQ0uG5U',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
        },
      });
    };
    window.document.body.appendChild(script);
    }
  }
}
