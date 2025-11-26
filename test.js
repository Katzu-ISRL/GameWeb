// 1. Configuración del Juego
const config = {
    // 1.1 Tipo de renderizado (AUTO intentará usar WebGL, si no, usará Canvas)
    type: Phaser.AUTO,
    // 1.2 Dimensiones del "lienzo" (Canvas) de tu juego
    width: 800,
    height: 600,
    // 1.3 Elemento HTML para inyectar el Canvas (opcional, si no se especifica, lo añade al <body>)
    // parent: 'game-container',
    // 1.4 Escenas del juego
    scene: {
        preload: preload, // Carga de assets
        create: create,   // Inicialización de objetos
        update: update    // Lógica del juego (bucle principal)
    }
};

// 2. Creación de la Instancia de Phaser.Game
// ¡Esto es lo que crea el "lienzo" (Canvas) en tu página HTML!
const game = new Phaser.Game(config);

// 3. Funciones de las Escenas

// Función para cargar imágenes, sonidos, etc.
function preload ()
{
    this.load.image('T1TEAM', 'image/assets/T1TEAM.jpg');
}

// Función que se ejecuta una vez, después de la carga
function create ()
{
    this.add.image(400, 300, 'T1TEAM');
}

// Función que se ejecuta en cada frame
function update (time, delta)
{
}