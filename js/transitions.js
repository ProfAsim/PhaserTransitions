// Create a new Phaser Game instance with a configuration object
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        // Initial scene
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
const Scene1 = {
    // Preload function for loading assets
    preload: function() {
        // Load your assets here (images, spritesheets, etc.)
        this.load.image('background', 'assets/lushgreen.webp');
    },

        // Create function for initializing game objects
   create: function() {
            // Add a background sprite
            const background = this.add.sprite(0, 0, 'background').setOrigin(0, 0);
        
            // Set up a text object to display scene information
            const text = this.add.text(400, 300, 'Scene 1 - Press Space to Transition', {
                fontSize: '24px',
                fill: '#fff'
            });
            text.setOrigin(0.5);
        
            // Define a key for transitioning to the next scene
            const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
            // Set up an event listener for the space key
            this.input.keyboard.on('keydown-SPACE', function (event) {
                // Transition to the next scene
                this.scene.start('Scene2');
            }, this);
        },
        
        // Update function for game logic
      update: function() {
            // Add any game logic or updates here
        }
};

// Define a second scene
const Scene2 = {
    preload: function () {
        // Additional preload for Scene2 if needed
          this.load.image('beachwavews', 'assets/beachwaves.webp');

    },
    create: function () {
        // Additional setup for Scene2
        const text = this.add.text(400, 300, 'Scene 2 - Press Space to Go Back', {
            fontSize: '24px',
            fill: '#fff'
        });
        text.setOrigin(0.5);

        // Set up an event listener for the space key to go back to Scene1
        this.input.keyboard.on('keydown-SPACE', function (event) {
            this.scene.start('default');
        }, this);
    },
    update: function () {
        // Additional updates for Scene2 if needed
    }
};

// Add both scenes to the game
game.scene.add('default', Scene1);
game.scene.add('Scene2', Scene2);

// Start the initial scene
game.scene.start('default');
