const wrapper = document.getElementById('formWrapper');
  const toggleBtn = document.getElementById('toggleBtn');
  const toggleHeading = document.getElementById('toggleHeading');
  const toggleText = document.getElementById('toggleText');

  toggleBtn.addEventListener('click', () => {
    wrapper.classList.toggle('active');

    if(wrapper.classList.contains('active')){
      toggleHeading.textContent = "Already have an account?";
      toggleText.textContent = "Login to your account!";
      toggleBtn.textContent = "Login";
    } else {
      toggleHeading.textContent = "Don't have an account?";
      toggleText.textContent = "Sign up to get started!";
      toggleBtn.textContent = "Sign Up";
    }
  });