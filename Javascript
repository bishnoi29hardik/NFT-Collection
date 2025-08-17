// --------------------------------------------
// NFT Collection Project
// Author: Hardik Bishnoi
// Description: A simple JavaScript program to
// mint NFTs, list them, and get total supply.
// --------------------------------------------

// Array to hold all NFTs
const NFT_Collection = [];

/**
 * Mint a new NFT
 * @param {string} name - The name of the NFT
 * @param {string} description - A short description of the NFT
 * @param {object} attributes - Key-value pairs for NFT metadata
 */
function mintNFT(name, description, attributes) {
    const NFT = {
        name: name,
        description: description,
        attributes: attributes
    };
    NFT_Collection.push(NFT);
    console.log(`✅ Minted: ${name}`);
}

/**
 * List all NFTs in the collection
 */
function listNFTs() {
    console.log("\n📜 NFT Collection:");
    NFT_Collection.forEach((nft, index) => {
        console.log(`\n#${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Description: ${nft.description}`);
        console.log("Attributes:");
        for (const [key, value] of Object.entries(nft.attributes)) {
            console.log(`   - ${key}: ${value}`);
        }
    });
}

/**
 * Get total number of NFTs
 */
function getTotalSupply() {
    console.log(`\n🔢 Total NFTs Minted: ${NFT_Collection.length}`);
}

// --------------------------------------------
// Example usage
// --------------------------------------------
mintNFT('Hardik', 'This is the first NFT', { rarity: 'Rare', stamina: 100 });
mintNFT('Virat', 'This is the second NFT', { rarity: 'Common', stamina: 90 });

listNFTs();
getTotalSupply();
