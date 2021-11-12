require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note predict unique gesture castle off symbol'; 
let testAccounts = [
"0x33ef19bb14e66f6a49fd75e0161dbe423acf3ed7a4701fecacb43892e4e794a0",
"0x37f25593b9236b5e76302dc20e3374d83f807674c62dcde840106969cea1bca7",
"0x52a361b2d89d870eb3b7f4cf9c4b726fbd236221c4850e1ea33065d12d49d056",
"0x8472377ee09e9d32538808ff823b00125b840a2285094cb9400ee463543646f9",
"0x58861d0577d80f36ceeadbadf33f19287d0c676b999e536663a2ae80acdef8b2",
"0xcba03468ef57ba2cef6cc1dc847fa4eeed58e524028c790ca9927c0b6c18a63b",
"0x8569c13bdbdb8780e8502e8539da08c28af30033448e6515a0264ddd7a5521e5",
"0x0320cd48e2f7e90ee8ba12711552372358ba0ecd29e413be94c2e8620e66ce26",
"0xdf43da1e9287db2f585789c5314e5f1548d81bc2fd82efbc57939a41aa2e38c3",
"0xb3f3b33dd2f648bf1f73e7ea50546c7f782d219c32551b1c658c8854f698ca97"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


