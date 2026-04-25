// App configuration. Edit values here and reload the page.
const CONFIG = {
    // Default number of correct-in-a-row answers before "mastered".
    // Each section below can override this with its own `requiredCorrect`.
    requiredCorrect: 2,

    // If true, a wrong answer resets the correct-streak for that question to 0.
    resetStreakOnWrong: true,

    // Avoid showing the same question twice in a row (when possible).
    avoidImmediateRepeat: true,

    // localStorage key prefix used to persist progress in the browser.
    // Per-section progress is stored under `${storageKey}:<sectionId>`.
    storageKey: "exam-trainer-progress-v1",

    // 12 sections. Edit `requiredCorrect` per section as needed (omit to use default).
    sections: [
        { id: 1,  folder: "1_lociya",                          title: "1. Лоція",                              requiredCorrect: 2 },
        { id: 2,  folder: "2_dii_u_vypadkakh_avariinykh_podii",title: "2. Дії у випадках аварійних подій",     requiredCorrect: 3 },
        { id: 3,  folder: "3_tekhnika_bezpeky",                title: "3. Техніка безпеки",                    requiredCorrect: 2 },
        { id: 4,  folder: "4_riatuvalne_obladnennia",          title: "4. Рятувальне обладнання",              requiredCorrect: 2 },
        { id: 5,  folder: "5_navigatsiia",                     title: "5. Навігація",                          requiredCorrect: 2 },
        { id: 6,  folder: "6_pohodni_umovy",                   title: "6. Погодні умови",                      requiredCorrect: 2 },
        { id: 7,  folder: "7_manevruvannia",                   title: "7. Маневрування",                       requiredCorrect: 3 },
        { id: 8,  folder: "8_upravlinnia",                     title: "8. Управління",                         requiredCorrect: 3 },
        { id: 9,  folder: "9_pravyla_plavannia",               title: "9. Правила плавання",                   requiredCorrect: 3 },
        { id: 10, folder: "10_budova_sudna",                   title: "10. Будова судна",                      requiredCorrect: 2 },
        { id: 11, folder: "11_vodnyi_mototsykl",               title: "11. Водний мотоцикл",                   requiredCorrect: 2 },
        { id: 12, folder: "12_prohuliankove_vitrilne_sudno",   title: "12. Прогулянкове вітрильне судно",      requiredCorrect: 2 }
    ]
};

