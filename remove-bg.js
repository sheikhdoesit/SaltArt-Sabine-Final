const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const path = require('path');

async function main() {
    console.log("Removing background...");
    const image_path = path.join(__dirname, 'public', 'Sabine.png');
    const image_path_jpg = path.join(__dirname, 'public', 'sabine.jpg');
    try {
        const blob = await removeBackground(image_path);
        const buffer = Buffer.from(await blob.arrayBuffer());
        
        fs.writeFileSync(image_path, buffer); 
        console.log("Background removed and saved to Sabine.png");
        
        if (fs.existsSync(image_path_jpg)) {
            fs.writeFileSync(image_path_jpg, buffer); 
            console.log("Background removed and saved to sabine.jpg");
        }
    } catch (error) {
        console.error("Error removing background:", error);
    }
}

main();
