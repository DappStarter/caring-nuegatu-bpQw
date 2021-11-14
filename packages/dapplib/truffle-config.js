require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index rescue stereo provide gesture photo equal gaze'; 
let testAccounts = [
"0x28837d1f6b8da2d201b5ad6bd051b7814de5a7404cf36065a55971f392580e84",
"0x47dc48f6186249cc4404dd82de756e1edb278ecf638e6326e49a785291906039",
"0x00c960119689f8b0bcd39ab412d4cbff7c4ec532211f5058593e0ff6855c63ca",
"0x9555f0d43d2608aae42437a5fc1bc7fa11aab160c76e8c0b17c27fdae68afe7a",
"0xb0ffe5cc48cd98ea2d8aa75dbc812f11bbd239d8f699d94ada9ca539203282ff",
"0xa1d16243f2025d1eaf883ed54e393a3af9fd55f39353106f3a5f4d79053c839c",
"0x2044cf16f32da611aae7683c15ceb007e688ccc49e0a3dd46a24d6181b6b67b5",
"0xc0b01a235d165e5b347299e17667a97e9db13f36d0be43172f6e175f827d4839",
"0x266232d61696452ef3d4db9be1f6eb3c87dade9734589eef3ae454c588131bf1",
"0x64fa41b1c54e9615bbde065dd4ba6ee17427259d44b99984bb604fbddacb8f5c"
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


