<script>
  import { HStack, VStack } from '$lib';
</script>

<form action="">
  <span>logo</span>
  <h1>mf ID</h1>
  <p>Please confirm your country code and enter your phone number.</p>
  <h1 class="text-3xl font-semibold">hello world</h1>

  <VStack>
    <p>
      <label for="loginEmail">Email</label>
      <input type="email" id="loginEmail" placeholder="Enter your email" />
    </p>

    <p>
      <label for="loginPassword">Password</label>
      <input type="password" id="loginPassword" placeholder="Enter your password" />
    </p>

    <a href="/id/forgot-password">Забыл пароль?</a>

    <button type="submit">Log in</button>

    <a href="/id/sign-up">Create an account</a>
  </VStack>
</form>
