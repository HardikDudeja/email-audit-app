export const emailRules = [
  {
    id: "rule_greeting",
    description: "Check for professional greeting",
    prompt:
      "Does the email start with a professional greeting such as 'Dear', 'Hello', or 'Hi'?",
    weight: 1,
  },
  {
    id: "rule_clarity",
    description: "Check for message clarity",
    prompt: "Is the email clear and free from ambiguity?",
    weight: 2,
  },
  {
    id: "rule_grammar",
    description: "Check for grammar and spelling errors",
    prompt: "Does the email contain proper grammar and spelling?",
    weight: 2,
  },
];
