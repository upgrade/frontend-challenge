import signUpData from "../fixtures/signup.json";

describe("sign up - success", () => {
  it("passes", () => {
    cy.visit("/");

    // Start view
    const firstNameInput = cy.get('[data-testid="first-name-input"]');
    const emailInput = cy.get('[data-testid="email-input"]');
    const passwordInput = cy.get('[data-testid="password-input"]');
    const startForm = cy.get('[data-testid="start-form"]');

    firstNameInput.type(signUpData.firstName);
    emailInput.type(signUpData.email);
    passwordInput.type(signUpData.password);
    startForm.submit();

    cy.location().should((location) => {
      expect(location.pathname).to.equal("/more-info");
    });

    // More info view
    const colorSelect = cy.get('[data-testid="color-select"]');
    const termsCheckbox = cy.get('[data-testid="terms-checkbox"] > input');
    const moreInfoForm = cy.get('[data-testid="more-info-form"]');

    colorSelect.select(signUpData.favoriteColor);
    termsCheckbox.check({ force: true });
    moreInfoForm.submit();

    cy.location().should((location) => {
      expect(location.pathname).to.equal("/confirmation");
    });

    // Confirmation view
    const showPasswordBtn = cy.get('[data-testid="show-password-btn"]');
    showPasswordBtn.click();

    cy.contains('[data-testid="first-name-value"]', signUpData.firstName);
    cy.contains('[data-testid="email-value"]', signUpData.email);
    cy.contains('[data-testid="password-value"]', signUpData.password);
    cy.contains('[data-testid="color-value"]', signUpData.favoriteColor);
    cy.contains('[data-testid="terms-value"]', signUpData.terms);

    const confirmationForm = cy.get('[data-testid="confirmation-form"]');
    confirmationForm.submit();

    cy.location().should((location) => {
      expect(location.pathname).to.equal("/success");
    });
  });
});
