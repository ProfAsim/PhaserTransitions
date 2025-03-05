const Scene1 = {
    preload: function() {
        this.load.image('background', 'assets/lushgreen.webp');
    },

    create: function() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);

        const text = this.add.text(400, 300, 'Scene 1 - Press Space to Transition', {
            fontSize: '24px',
            fill: '#fff'
        });
        text.setOrigin(0.5);

        this.input.keyboard.on('keydown-SPACE', function () {
            this.scene.start('Scene2');
        }, this);
    },

    update: function() {}
};

const Scene2 = {
    preload: function () {
        this.load.image('beachwaves', 'assets/beachwaves.webp');
    },

    create: function () {
        this.add.image(0, 0, 'beachwaves').setOrigin(0, 0);

        const text = this.add.text(400, 300, 'Scene 2 - Press Space to Go Back', {
            fontSize: '24px',
            fill: '#fff'
        });
        text.setOrigin(0.5);

        this.input.keyboard.on('keydown-SPACE', function () {
            this.scene.start('default');
        }, this);
    },

    update: function () {}
};

//  Now define the config object AFTER scenes are declared
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Scene1  // Use Scene1 as the initial scene
};

// Now create the game instance
const game = new Phaser.Game(config);

//  Add scenes to the game
game.scene.add('default', Scene1);
game.scene.add('Scene2', Scene2);

//  Start the first scene
game.scene.start('default');
