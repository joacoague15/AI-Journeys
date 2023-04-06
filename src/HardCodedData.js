import goblin from "./assets/gifs/goblin.gif";
import orc from "./assets/gifs/orc.gif";
import troll from "./assets/gifs/troll.gif";
import ogre from "./assets/gifs/ogre.gif";
import skeleton from "./assets/gifs/skeleton.gif";
import zombie from "./assets/gifs/zombie.gif";
import cultist from "./assets/gifs/cultist.gif";
import gnoll from "./assets/gifs/gnoll.gif";
import gargoyle from "./assets/gifs/gargoyle.gif";
import worg from "./assets/gifs/worg.gif";


export const Enemies = {
    lowLevel: [
        {
            name: "Goblin",
            image: goblin,
            health: 2,
            attack: 1,
            experienceEnemyGives: 15,
        },
        {
            name: "Orc",
            image: orc,
            health: 3,
            attack: 1,
            experienceEnemyGives: 20,
        },
        {
            name: "Troll",
            image: troll,
            health: 4,
            attack: 1,
            experienceEnemyGives: 25,
        },
        {
            name: "Ogre",
            image: ogre,
            health: 5,
            attack: 2,
            experienceEnemyGives: 30,
        },
        {
            name: "Skeleton",
            image: skeleton,
            health: 3,
            attack: 2,
            experienceEnemyGives: 35,
        },
        {
            name: "Zombie",
            image: zombie,
            health: 4,
            attack: 2,
            experienceEnemyGives: 40,
        },
        {
            name: "Cultist",
            image: cultist,
            health: 5,
            attack: 2,
            experienceEnemyGives: 45,
        },
        {
            name: "Gnoll",
            image: gnoll,
            health: 6,
            attack: 2,
            experienceEnemyGives: 50,
        },
        {
            name: "Gargoyle",
            image: gargoyle,
            health: 7,
            attack: 2,
            experienceEnemyGives: 60,
        },
        {
            name: "Worg",
            image: worg,
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


export const LootInventory = {
    weapons: [
        {
            id: 1,
            name: "Common sword",
            level: "common",
            type: "sword",
            requirements: { level: 1, class: "warrior" },
            strength: 1,
            constitution: 0,
            intelligence: 0,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086786623754207352/Mauricio_Hunau_basic_sword_29d8e2a9-d4f8-46b6-98a8-c79fd998abf6.png"
        }, {
            id: 2,
            name: "Common sword 2",
            level: "common",
            requirements: { level: 1, class: "warrior" },
            type: "sword",
            strength: 1.5,
            constitution: 0,
            intelligence: 0,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086786601113370735/Mauricio_Hunau_basic_sword_2aba5ee5-273b-4824-ac04-e55eb82e3925.png"
        }, {
            id: 3,
            name: "common sword 3",
            level: "common",
            requirements: { level: 1, class: "warrior" },
            type: "sword",
            strength: 1,
            constitution: 0.5,
            intelligence: 0,
            src: "https://image.lexica.art/full_jpg/25859c64-2671-468b-8012-00906b3a3f99"
        }, {
            id: 4,
            name: "common sword 4",
            level: "common",
            requirements: { level: 1, class: "warrior" },
            type: "sword",
            strength: 0.5,
            constitution: 1,
            intelligence: 0,
            src: "https://image.lexica.art/md2/55a781e4-3e17-4970-966f-922d97e14d98"
        }, {
            id: 5,
            name: "Rare sword",
            level: "rare",
            requirements: { level: 2, class: "warrior" },
            type: "sword",
            strength: 1,
            constitution: 1,
            intelligence: 0,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086786635468902511/Mauricio_Hunau_normal_sword_cb5e4e29-147a-4dc8-bc14-b4cc8bb5ac05.png"
        }, {
            id: 6,
            name: "Epic sword",
            level: "epic",
            requirements: { level: 3, class: "warrior" },
            type: "sword",
            strength: 2,
            constitution: 0,
            intelligence: 0,
            src: "https://image.lexica.art/full_jpg/78f9aa36-06bc-4802-81ce-718da969b7f7"
        }, {
            id: 7,
            name: "Legendary sword",
            level: "common",
            requirements: { level: 5, class: "warrior" },
            type: "sword",
            strength: 5,
            constitution: 0,
            intelligence: 0,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086786963400568852/Mauricio_Hunau_epic_sword_10640c26-c836-447b-9f18-53b4221695f8.png"
        }, {
            id: 8,
            name: "Legendary sword",
            level: "common",
            requirements: { level: 5, class: "warrior" },
            type: "sword",
            strength: 5,
            constitution: 0,
            intelligence: 0,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086787623537889300/Mauricio_Hunau_mitic_sword_bc59de90-b1aa-45d8-b399-f55e4a78ec49.png"
        }, {
            id: 9,
            name: "Common hummer",
            level: "common",
            requirements: { level: 1, class: "warrior" },
            type: "hummer",
            strength: 3,
            constitution: 0,
            intelligence: 0,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086788050861957390/Mauricio_Hunau_warriors_hammer_common_cb580a29-88a5-430d-b133-9a703e42eb11.png"
        }, {
            id: 10,
            name: "Rare hummer",
            level: "rare",
            requirements: { level: 2, class: "warrior" },
            type: "hummer",
            strength: 3,
            constitution: 1,
            intelligence: 0,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086787955030511616/Mauricio_Hunau_warriors_hammer_common_1c1e82fa-5e2f-47e5-bee9-349ff86c1063.png"
        }, {
            id: 11,
            name: "Common wand",
            level: "common",
            requirements: { level: 1, class: "mage" },
            type: "wand",
            strength: 0,
            constitution: 0,
            intelligence: 1,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086787961808502897/Mauricio_Hunau_legendary_wand_0c3b4d4f-b25a-4604-84f6-104740b8bc2a.png"
        }, {
            id: 12,
            name: "Rare staff",
            level: "rare",
            requirements: { level: 2, class: "mage" },
            type: "staff",
            strength: 0,
            constitution: 0,
            intelligence: 2,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086788291967328336/Mauricio_Hunau_wizard_staff_74b9af9c-7ca6-4d10-9beb-67677ffeb4f0.png"
        }, {
            id: 13,
            name: "Epic staff",
            level: "rare",
            requirements: { level: 2, class: "mage" },
            type: "staff",
            strength: 2,
            constitution: 0,
            intelligence: 0,
            src: "https://cdn.discordapp.com/attachments/703709686238543946/1086788300578238494/Mauricio_Hunau_wizard_staff_d284658d-acca-4241-a70c-2e37951eefa2.png"
        }
    ],
    armor: [{
        id: 1,
        name: "Common chestplate",
        level: "common",
        requirements: { level: 1, class: "warrior" },
        type: "chestplate",
        strength: 0,
        constitution: 2,
        intelligence: 0,
        src: "https://image.lexica.art/full_jpg/d8e30421-61c2-4ee8-ad0f-1a152285d5f2"
    }, {
        id: 2,
        name: "Rare chestplate",
        level: "rare",
        requirements: { level: 2, class: "warrior" },
        type: "chestplate",
        strength: 0,
        constitution: 4,
        intelligence: 0,
        src: "https://image.lexica.art/full_jpg/09c204fb-6800-49c6-86f1-d770a269bd77"
    }, {
        id: 3,
        name: "Epic chestplate",
        level: "epic",
        requirements: { level: 3, class: "warrior" },
        type: "chestplate",
        strength: 0,
        constitution: 6,
        intelligence: 0,
        src: "https://image.lexica.art/full_jpg/38875638-7726-4000-b331-26059a94c814"
    }, {
        id: 4,
        name: "Legendary chestplate",
        level: "legendary",
        requirements: { level: 5, class: "warrior" },
        type: "chestplate",
        strength: 0,
        constitution: 10,
        intelligence: 0,
        src: "https://image.lexica.art/full_jpg/ffb3a0b2-f442-4b09-9954-a275cae6d1cc"
    }, {
        id: 5,
        name: "Common Robe",
        level: "common",
        requirements: { level: 1, class: "mage" },
        type: "robe",
        strength: 0,
        constitution: 1,
        intelligence: 1,
        src: "https://image.lexica.art/full_jpg/6a6470f0-2223-4dee-ac7a-140af713b84b"
    }, {
        id: 6,
        name: "Rare Robe",
        level: "rare",
        requirements: { level: 2, class: "mage" },
        type: "robe",
        strength: 0,
        constitution: 1,
        intelligence: 2,
        src: "https://image.lexica.art/full_jpg/507cdc1c-86dc-439b-9a08-ffbbd571337a"
    }, {
        id: 7,
        name: "Epic Robe",
        level: "epic",
        requirements: { level: 3, class: "mage" },
        type: "robe",
        strength: 0,
        constitution: 2,
        intelligence: 4,
        src: "https://image.lexica.art/full_jpg/d722a753-33e1-4d08-830d-72dab7833de5"
    }, {
        id: 8,
        name: "Legendary Robe",
        level: "legendary",
        requirements: { level: 5, class: "mage" },
        type: "robe",
        strength: 0,
        constitution: 3,
        intelligence: 6,
        src: "https://image.lexica.art/full_jpg/2359d023-64c5-4b04-bea7-8fd86f6b462a"
    }]
}

export const textExamples = {
    walkingText: [
        "Navigating through a dense forest, with thick underbrush and towering trees blocking the sunlight. The party must watch out for hidden pitfalls, quicksand, and other natural hazards.",
        "Walking through a dark, winding cave system with only a few torches to light the way. The sound of dripping water echoes off the stone walls and the air is damp and musty.",
        "Traversing a rocky mountain pass with steep cliffs and narrow paths. The wind is howling and the air is thin, making it difficult to breathe. One misstep could send the party plummeting to their doom.",
        "Crossing a rickety rope bridge suspended over a deep, dark chasm. The bridge sways and creaks underfoot, and there are signs that it has been damaged by previous adventurers or creatures.",
        "Walking along a narrow, winding path carved into the side of a sheer cliff face. The path is slick with rain and the party must be careful not to slip or be knocked off by gusts of wind.",
        "Wading through a murky swamp with thick, sucking mud and dangerous creatures lurking just beneath the surface. The party must watch out for quicksand, leeches, and other hazards.",
    ],
    fightText: [
        "A group of goblins ambushes the party as they travel through a narrow mountain pass. The goblins attack from above with rocks and arrows while others charge in with crude weapons.",
        "The party stumbles upon a group of bandits who have taken up residence in an abandoned mine. The bandits are heavily armed and have set up traps and obstacles to protect their hideout.",
        "A pack of wolves attacks the party as they make camp for the night. The wolves are hungry and desperate, and they won't give up until they've had a chance to feed.",
        "The party is hired to take down a group of trolls that have been terrorizing a nearby village. The trolls are formidable opponents with thick hides and regenerative abilities.",
        "The party discovers a hidden dungeon filled with undead creatures that are guarding a powerful artifact. The undead are relentless and difficult to kill, but the party must defeat them to claim the artifact.",
        "A group of cultists is performing a dark ritual in an abandoned temple. The cultists are armed with cursed weapons and dark magic, and they will stop at nothing to complete their ritual.",
        "The party is hired to protect a caravan of merchants as they travel through bandit-infested territory. The bandits are well-organized and well-armed, and they will stop at nothing to get their hands on the valuable goods being transported.",
        "The party encounters a powerful wizard who is using his magic to summon and control hordes of monstrous creatures. The wizard is a formidable foe with a wide range of spells at his disposal.",
        "The party is hired to take down a powerful dragon that has been terrorizing a nearby village. The dragon is a fearsome opponent with powerful breath attacks and a thick hide.",
    ],
    lootText: [
        "A small chest containing a few gold coins and a few pieces of jewelry.",
        "A large chest containing a few gold coins, a few pieces of jewelry, and a few potions.",
        "A small chest containing a few gold coins, a few pieces of jewelry, and a few potions.",
        "A large chest containing a few gold coins, a few pieces of jewelry, and a few potions.",
        "A small chest containing a few gold coins, a few pieces of jewelry, and a few potions.",
        "A large chest containing a few gold coins, a few pieces of jewelry, and a few potions.",
        "A small chest containing a few gold coins, a few pieces of jewelry, and a few potions.",
        "A large chest containing a few gold coins, a few pieces of jewelry, and a few potions.",
        "A small chest containing a few gold coins, a few pieces of jewelry, and a few potions.",
    ]
}
