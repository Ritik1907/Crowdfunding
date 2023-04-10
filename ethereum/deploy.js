const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

/*const provider = new HDWalletProvider(
  'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);   */

const provider = new HDWalletProvider(
  'educate essence tonight salt old outer rain popular win trophy weasel shift',
  'https://mainnet.infura.io/v3/2e110ee307464c9f938c64bfa9c1c4cb'
);
const web3 = new Web3(provider);

const deploy =  async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from Account', accounts[0]);

  var myContract = new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
    ).deploy({ data: compiledFactory.bytecode }).send({
      from: accounts[0],
      gas: '0x16E360',
      gasPrice: '0x1B48EB57E000'
  }, function(error, transactionHash){ console.log('Error:-- ', error); });

  // const result =  new web3.eth.Contract(
  //   JSON.parse(compiledFactory.interface)
  // )
  //   .deploy({ data: compiledFactory.bytecode })
  //   .send({ gas: '1000000', from: accounts[0] });

  // console.log('Contract deployed to', result.options.address);
  // console.log('Contract deployed to', myContract.options.address);

};
deploy();
