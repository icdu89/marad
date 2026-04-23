// App configuration. Edit values here and reload the page.
const CONFIG = {
    // How many times in a row a question must be answered correctly
    // before it is considered "mastered" and removed from rotation.
    requiredCorrect: 2,

    // If true, a wrong answer resets the correct-streak for that question to 0.
    // If false, each correct answer is just counted (no reset on mistakes).
    resetStreakOnWrong: true,

    // Avoid showing the same question twice in a row (when possible).
    avoidImmediateRepeat: true,

    // localStorage key used to persist progress in the browser.
    storageKey: "exam-trainer-progress-v1"
};

