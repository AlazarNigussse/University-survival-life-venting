export function validateContact(data) {
  let { name, email, message } = data;

  // Trim whitespace
  name = name?.trim();
  email = email?.trim();
  message = message?.trim();

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Invalid email format." };
  }

  // Limit message length
  if (message.length > 500) {
    return { error: "Message must be under 500 characters." };
  }

  return {
    cleanData: { name, email, message }
  };
}
