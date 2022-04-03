<br />

<h2 "text-align:center"> Cloud Function Auth Endpoint  &nbsp;  🌨️   🌧️  &nbsp; </h2>


####  &nbsp;   <kbd><h3>:fire: Firebase Cloud function</h3></kbd>


- Function signs-in with username/password... then it uses
- JWT Bearer token to fetch data from the `/products` endpoint.
- LocalStorage to persist state across pages


<br />

####  &nbsp; <kbd><h3>About using a Cloud Function for this project   😶‍🌫️</h3></kbd>   &nbsp;




- While it all works fine , for this git project, I"ve gone back to  using a fake store
JSON data API.

- While these are technically free services by Google (50k requests per/day); nowadays, in order to use them, you have to first signup, and enter your credit card information. You didn't have to do that in the past. But I bring it up because there isn't a very safe way to protect your API keys with React in GitHub.

- Anything that you've stored in your `.env` files; regardless of whether the file has been pushed to Github or not, it is publicly accessible, if you know where to look.






<br />

<p>

That was fun. 😨

  </p>

<br />
<br />


![Postman](fbcloudFN.png)
