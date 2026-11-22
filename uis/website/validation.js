(() => {
  const form = document.getElementById('signup-form');
  const errorSummary = document.getElementById('form-errors');
  const successMessage = document.getElementById('success-message');
  const fields = {
    firstName: { input: document.getElementById('first-name'), label: 'First name' },
    lastName: { input: document.getElementById('last-name'), label: 'Last name' },
    email: { input: document.getElementById('email'), label: 'Email address' },
    birthDate: { input: document.getElementById('birth-date'), label: 'Date of birth' },
    country: { input: document.getElementById('country'), label: 'Country' },
    restaurant: { input: document.getElementById('restaurant'), label: 'Preferred restaurant' }
  };

  function validate(key) {
    const { input, label } = fields[key];
    const value = input.value.trim();
    if (input.required && !value) return `${label} is required. Please enter ${key === 'birthDate' ? 'your date of birth' : key === 'email' ? 'your email address' : `your ${label.toLowerCase()}`}.`;
    if (!value) return '';
    if ((key === 'firstName' || key === 'lastName') && !/^[\p{L}][\p{L}\p{M}'’ -]*$/u.test(value)) return `${label} must start with a letter and contain only letters, spaces, apostrophes, or hyphens.`;
    if ((key === 'firstName' || key === 'lastName') && value.length < 2) return `${label} must be at least 2 characters long.`;
    if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return 'Enter a valid email address, such as name@example.com.';
    if (key === 'birthDate') {
      const date = new Date(`${value}T00:00:00`);
      if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return 'Enter a valid date of birth.';
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (date > today) return 'Date of birth cannot be in the future.';
    }
    if (key === 'country' && !['', 'CO', 'US'].includes(value)) return 'Choose Colombia or United States from the list.';
    if (key === 'restaurant' && !['', 'medellin', 'colombia-other', 'miami', 'florida-other'].includes(value)) return 'Choose a restaurant location from the list.';
    return '';
  }

  function showFieldError(key, message) {
    const input = fields[key].input;
    const error = document.getElementById(`${input.id}-error`);
    error.textContent = message;
    error.classList.toggle('hidden', !message);
    input.setAttribute('aria-invalid', String(Boolean(message)));
    if (message) input.classList.add('border-red-700');
    else input.classList.remove('border-red-700');
  }

  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener('input', () => {
      if (fields[key].input.getAttribute('aria-invalid') === 'true') showFieldError(key, validate(key));
    });
    fields[key].input.addEventListener('change', () => {
      if (fields[key].input.getAttribute('aria-invalid') === 'true') showFieldError(key, validate(key));
    });
  });

  form.addEventListener('reset', () => {
    // The reset event fires before native controls are cleared; clear custom UI now.
    errorSummary.classList.add('hidden');
    errorSummary.textContent = '';
    successMessage.classList.add('hidden');
    Object.keys(fields).forEach((key) => showFieldError(key, ''));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    successMessage.classList.add('hidden');
    const invalid = [];
    Object.keys(fields).forEach((key) => {
      const message = validate(key);
      showFieldError(key, message);
      if (message) invalid.push({ key, message, label: fields[key].label });
    });
    if (invalid.length) {
      errorSummary.innerHTML = `<p class="font-bold">Please correct ${invalid.length === 1 ? 'this field' : 'these fields'}:</p><ul class="mt-2 list-inside list-disc">${invalid.map(({ key, message, label }) => `<li><a class="underline" href="#${fields[key].input.id}">${label}: ${message}</a></li>`).join('')}</ul>`;
      errorSummary.classList.remove('hidden');
      errorSummary.focus();
      fields[invalid[0].key].input.focus();
      return;
    }
    errorSummary.classList.add('hidden');
    successMessage.classList.remove('hidden');
    successMessage.focus();
    form.reset();
    Object.keys(fields).forEach((key) => showFieldError(key, ''));
  });
})();
