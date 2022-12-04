export class Assertive {
  assertive() {
    return {
      ASSERTIVE: {
        COMPARE_TEXT: "have.text",
        COMPARE_VALUE: "have.value",
        CONTAIN: "contain",
        NOT_CONTAIN: "not.be.contain",
        VISIBLE: "be.visible",
        NOT_VISIBLE: "not.be.visible",
        INCLUDE_TEXT: "include",
        NOT_HAVE_VALEU: "not.have.value",
        QUANTITY: "have.length",
      },
    };
  }
}

const assertive = new Assertive();
export default assertive;
