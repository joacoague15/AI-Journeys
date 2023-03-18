const Enemies = {
    lowLevel: [
    {
        name: "Goblin",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086495903310958622/joacoague_Goblin_0bf9b7f2-c018-47ca-92da-5432102887b5.png?width=910&height=910",
        health: 2,
        attack: 1,
        experienceEnemyGives: 15,
    },
    {
        name: "Orc",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496022915711027/joacoague_Orc_41b3686e-379a-4e92-b777-c3ba461fa352.png?width=910&height=910",
        health: 3,
        attack: 1,
        experienceEnemyGives: 20,
    },
    {
        name: "Troll",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496032067686480/joacoague_Troll_ff26ca4e-869e-40c6-b0fb-491288676c62.png?width=910&height=910",
        health: 4,
        attack: 1,
        experienceEnemyGives: 25,
    },
    {
        name: "Ogre",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496245763293285/joacoague_Ogre_4dbbb01b-e027-41c9-94b9-fa670028b48c.png?width=910&height=910",
        health: 5,
        attack: 2,
        experienceEnemyGives: 30,
    },
    {
        name: "Skeleton",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496590480552027/joacoague_skeleton_warrior_c5acd43c-fb86-4156-9800-840924487945.png?width=910&height=910",
        health: 3,
        attack: 2,
        experienceEnemyGives: 35,
    },
    {
        name: "Zombie",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496361882603570/joacoague_Zombie_75759d5f-8b46-412d-9b30-3b407ae44aa1.png?width=910&height=910",
        health: 4,
        attack: 2,
        experienceEnemyGives: 40,
    },
    {
        name: "Cultist",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496397685174333/joacoague_Cultist_e9a1088b-d8c3-47d8-a6b2-d00bc01f6b9f.png?width=910&height=910",
        health: 5,
        attack: 2,
        experienceEnemyGives: 45,
    },
    {
        name: "Gnoll",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496698546802699/joacoague_Gnoll_4fdbcb7c-9f85-4711-b4ab-e42997c51a98.png?width=910&height=910",
        health: 6,
        attack: 2,
        experienceEnemyGives: 50,
    },
    {
        name: "Gargoyle",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496725826551959/joacoague_Gargoyle_7eb8740e-cde5-46c3-9f7b-1adcefa44fa1.png?width=910&height=910",
        health: 7,
        attack: 2,
        experienceEnemyGives: 60,
    },
    {
        name: "Worg",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086496926259744829/joacoague_Worg_127cec4b-c24e-489c-8406-a2cbac4e6ed1.png?width=910&height=910",
        health: 8,
        attack: 2,
        experienceEnemyGives: 70,
    }
    ],
    mediumLevel: [
    {
        name: "Minotaur",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086497028105830542/joacoague_Minotaur_a8d8158e-ceb3-4af4-a851-0c5c19503e0e.png?width=910&height=910",
        health: 12,
        attack: 3,
        experienceEnemyGives: 80,
    },
    {
        name: "Harpy",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086497059676372992/joacoague_Harpy_d93643b6-6a06-48ec-b956-f3610d2b62cc.png?width=910&height=910",
        health: 10,
        attack: 3,
        experienceEnemyGives: 90,
    },
    {
        name: "Ghoul",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086497252266217502/joacoague_Ghoul_71669fac-1fc3-4005-b379-a44ff2fdf1f7.png?width=910&height=910",
        health: 8,
        attack: 3,
        experienceEnemyGives: 100,
    },
    {
        name: "Chimera",
        image: "https://image.lexica.art/full_jpg/3a9da70b-ff01-41ee-88ff-a49758356ac5",
        health: 20,
        attack: 2,
        experienceEnemyGives: 150,
    },
    {
        name: "Medusa",
        image: "https://media.discordapp.net/ephemeral-attachments/703709686238543946/1086497340698935326/grid_0.webp?width=910&height=910",
        health: 15,
        attack: 3,
        experienceEnemyGives: 200,
    },
    {
        name: "Hydra",
        image: "https://media.discordapp.net/ephemeral-attachments/703709686238543946/1086497372860858428/grid_0.webp?width=910&height=910",
        health: 30,
        attack: 4,
        experienceEnemyGives: 300,
    }
    ],
    highLevel: [
    {
        name: "Marilith",
        image: "https://image.lexica.art/full_jpg/299c4e6f-65e8-477e-9f21-c550b6cee13e",
        health: 40,
        attack: 5,
        experienceEnemyGives: 350,
    },
    {
        name: "Beholder",
        image: "https://media.discordapp.net/attachments/703709686238543946/1086497676100632598/joacoague_beholder_dungeon_and_dragons_50a83c91-82ae-4881-b735-a37640ac112e.png?width=910&height=910",
        health: 35,
        attack: 5,
        experienceEnemyGives: 400,
    },
    {
        name: "Kraken",
        image: "https://image.lexica.art/full_jpg/2d22fe90-6619-4432-b7bb-dfe73cd3f3df",
        health: 50,
        attack: 5,
        experienceEnemyGives: 450,
    },
    {
        name: "Lich",
        image: "https://image.lexica.art/full_jpg/a2c02922-5616-4c9f-a3b5-2127ae96ec62",
        health: 70,
        attack: 8,
        experienceEnemyGives: 500,
    }
    ]
}

export default Enemies;