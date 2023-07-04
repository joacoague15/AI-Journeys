import goblin from "./assets/videos/goblin.mp4";
import orc from "./assets/videos/orc.mp4";
import troll from "./assets/videos/troll.mp4";
import ogre from "./assets/videos/ogre.mp4";
import cultist from "./assets/videos/cultist.mp4";

import hallway1 from "./assets/images/hallway1.jpg";
import hallway2 from "./assets/images/hallway2.jpg";
import hallway3 from "./assets/images/hallway3.jpg";
import hallway4 from "./assets/images/hallway4.jpg";
import hallway5 from "./assets/images/hallway5.jpg";
import hallway6 from "./assets/images/hallway6.jpg";
import hallway7 from "./assets/images/hallway7.png";
import hallway8 from "./assets/images/hallway8.png";
import hallway9 from "./assets/images/hallway9.png";
import hallway10 from "./assets/images/hallway10.png";
import hallway11 from "./assets/images/hallway11.png";
import hallway12 from "./assets/images/hallway12.png";

import npc1Sound from "./assets/sounds/npc1.mp3";
import npc2Sound from "./assets/sounds/npc2.mp3";
import npc3Sound from "./assets/sounds/npc3.mp3";
import npc4Sound from "./assets/sounds/npc4.mp3";
import npc5Sound from "./assets/sounds/npc5.mp3";


import npc6Sound1 from "./assets/sounds/npc6.mp3";
import npc6Sound2 from "./assets/sounds/npc6_2.mp3";
import npc6Sound3 from "./assets/sounds/npc6_3.mp3";
import npc6Sound4 from "./assets/sounds/npc6_4.mp3";

import np1Image from "./assets/images/npc1.jpg";
import npc2Image from "./assets/images/npc2.jpg";
import npc3Image from "./assets/images/npc3.jpg";
import npc4Image from "./assets/images/npc4.jpg";
import npc5Image from "./assets/images/npc5.jpg";
import npc6Image from "./assets/images/npc6.jpg";

import hallwaySound1 from "./assets/sounds/hallway1.mp3";
import hallwaySound2 from "./assets/sounds/hallway2.mp3";
import hallwaySound3 from "./assets/sounds/hallway3.mp3";
import hallwaySound4 from "./assets/sounds/hallway4.mp3";
import hallwaySound5 from "./assets/sounds/hallway5.mp3";
import hallwaySound6 from "./assets/sounds/hallway6.mp3";
import hallwaySound7 from "./assets/sounds/hallway7.mp3";
import hallwaySound8 from "./assets/sounds/hallway8.mp3";
import hallwaySound9 from "./assets/sounds/hallway9.mp3";
import hallwaySound10 from "./assets/sounds/hallway10.mp3";
import hallwaySound11 from "./assets/sounds/hallway11.mp3";
import hallwaySound12 from "./assets/sounds/hallway12.mp3";

export const Enemies = {
    lowLevel: [
        {
            name: "Goblin",
            video: goblin,
            health: 100,
            attackMin: 10,
            attackMax: 20,
            critChance: 3,
            critDmg: 20,
            experienceEnemyGives: 105,
        },
        {
            name: "Orc",
            video: orc,
            health: 100,
            attackMin: 10,
            attackMax: 20,
            critChance: 10,
            critDmg: 20,
            experienceEnemyGives: 200,
        },
        {
            name: "Troll",
            video: troll,
            health: 100,
            attackMin: 10,
            attackMax: 20,
            critChance: 5,
            critDmg: 20,
            experienceEnemyGives: 205,
        },
        {
            name: "Ogre",
            video: ogre,
            health: 100,
            attackMin: 20,
            attackMax: 30,
            critChance: 15,
            critDmg: 20,
            experienceEnemyGives: 300,
        },
        {
            name: "Cultist",
            video: cultist,
            health: 100,
            attackMin: 20,
            attackMax: 30,
            critChance: 10,
            critDmg: 20,
            experienceEnemyGives: 405,
        },
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

export const Scenarios = {
    walking: [
        {
            text: [
                "The hero traversed the shadowy dungeon hallway, deftly navigating hidden perils to confront the unknown evils lurking ahead.",
            ],
            img: hallway1,
            speak: [
                hallwaySound1
            ],
        },
        {
            text: [
                "In the dungeon's eerie hallway, the hero crept cautiously, senses heightened, as unseen malevolence whispered chilling threats from the encroaching shadows.",
            ],
            img: hallway2,
            speak: [
                hallwaySound2,
            ],
        },
        {
            text: [
                "The hero ventured into the dungeon's sinister hallway, shrouded in darkness and dread, every step echoing with the whispers of lurking, maleficent forces.",
            ],
            img: hallway3,
            speak: [
                hallwaySound3,
            ]
        },
        {
            text: [
                "The hero cautiously traversed the dungeon's oppressive hallway, each step shrouded in a heavy darkness that concealed the sinister whispers of unseen entities, poised to challenge the hero's every move.",
            ],
            img: hallway4,
            speak: [
                hallwaySound4,
            ],
        },
        {
            text: [
                "The hero inched through the dungeon's shadowy corridor, alert to the chilling presence of hidden malevolence lurking nearby.",
            ],
            img: hallway5,
            speak: [
                hallwaySound5,
            ]
        },
        {
            text: [
                "In the dungeon's gloomy passage, the hero braved the unsettling quiet, prepared to confront the concealed terrors veiled within.",
            ],
            img: hallway6,
            speak: [
                hallwaySound6,
            ],
        },
        {
            text: [
                "Venturing through nature's decaying catacomb, the hero navigated a riotous disarray of lush and rot.",
            ],
            img: hallway7,
            speak: [
                hallwaySound7,
            ],
        },
        {
            text: [
                "In the colossal hallway of overgrown decay, the hero paced carefully. The air, thick with humidity, carried the scent of rich loam and rot.",
            ],
            img: hallway8,
            speak: [
                hallwaySound8
            ],
        },
        {
            text: [
                "Navigating through the skeletal remains of the hallway, the hero stepped cautiously. Sunlight stabbed through gaping holes in the ruined ceiling, spotlighting the decayed grandeur below.",
            ],
            img: hallway9,
            speak: [
                hallwaySound9,
            ],
        },
        {
            text: [
                "Traversing the dilapidated hallway, the hero paused at the sight of diverging staircases, each fading into darkness. Far ahead, hallway morphed abruptly. A stark silhouette against the backdrop of decay.",
            ],
            img: hallway10,
            speak: [
                hallwaySound10,
            ],
        },
        {
            text: [
                "Stepping cautiously through the sepulchral hallway, the hero's senses were assaulted by an air thick with dust and forgotten epochs. The damp chill seemed to seep from the very stone, and shadows danced eerily across tomb-like alcoves.",
            ],
            img: hallway11,
            speak: [
                hallwaySound11,
            ],
        },
        {
            text: [
                "Striding through the monolithic hallway, the hero was dwarfed by towering pillars, their stone bodies scarred by time and veiled in a patina of lichen. Each massive sentinel stood as a testament to the grandeur that once was.",
            ],
            img: hallway12,
            speak: [
                hallwaySound12,
            ],
        },
        {
            text: [
                "Heed my words, for beyond this point lie treacherous trials that shall test the very limits of your courage and cunning!",
            ],
            img: np1Image,
            speak: [
                npc1Sound,
            ],
        },
        {
            text: [
                "The path ahead is hard. Yet, in your eyes, I discern a spark of greatness that sets you apart.",
            ],
            img: npc2Image,
            speak: [
                npc2Sound,
            ],
        },
        {
            text: [
                "If you wish to escape, you must embrace the necessity of combat, as I did. Stay vigilant. And may fortune guide your blade.",
            ],
            img: npc3Image,
            speak: [
                npc3Sound,
            ],
        },
        {
            text: [
                "I can tell you're nervous. But don't worry. It makes things more interesting. So go on, keep moving forward and face those challenges head-on. You might just surprise yourself!",
            ],
            img: npc4Image,
            speak: [
                npc4Sound,
            ],
        },
        {
            text: [
                "I can't continue. This is too much for me! I've decided to stop trying. But maybe you still have the strength to carry on.",
            ],
            img: npc5Image,
            speak: [
                npc5Sound,
            ],
        },
        {
            text: [
                "Well, well, well! Look who's stumbled into my dungeon. The so-called hero! You're out of your league here. Have you not seen my biceps? Have you not witnessed my brilliant mind at work? Just give up already!",
                "By the stones of my ancestors! You've got the gall to enter my dungeon? My axe is sharper than any wit, my courage as solid as the mountain rock. Your defeat is carved in stone!",
                "Finally, a visitor in my dominion! Don't be fooled by my stature. I've wrestled giants and outsmarted wizards. My brawn and brains will surely impress you. Prepare to be scared!",
                "These biceps, they've split stone and sundered iron! And my mind, it's a fortress of tactics and strategy. Beware, for underestimating either could be your downfall!"
            ],
            img: npc6Image,
            speak: [
                npc6Sound1,
                npc6Sound2,
                npc6Sound3,
                npc6Sound4,
            ]
        },
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
