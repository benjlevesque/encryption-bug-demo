import {
  RequestLogicTypes,
  IdentityTypes,
  SignatureTypes,
  EncryptionTypes
} from "@requestnetwork/types";

export const createParams = {
  currency: {
    type: RequestLogicTypes.CURRENCY.ETH,
    value: "ETH"
  },
  expectedAmount: "170000000000",
  payee: {
    type: IdentityTypes.TYPE.ETHEREUM_ADDRESS,
    value: "0xAf083f77F1fFd54218d91491AFD06c9296EaC3ce"
  },
  payer: {
    type: IdentityTypes.TYPE.ETHEREUM_ADDRESS,
    value: "0x482B4f57D5692ac16e015027637cE275E9CE5Fab"
  },
  timestamp: 1544426030
};

export const encryptionKey = {
  key:
    "9008306d319755055226827c22f4b95552c799bae7af0e99780cf1b5500d9d1ecbdbcf6f27cdecc72c97fef3703c54b717bca613894212e0b2525cbb2d1161b9",
  method: EncryptionTypes.METHOD.ECIES
};
export const decryptionKey = {
  key: "0x0906ff14227cead2b25811514302d57706e7d5013fcc40eca5985b216baeb998",
  method: EncryptionTypes.METHOD.ECIES
};

export const signerIdentity = {
  type: IdentityTypes.TYPE.ETHEREUM_ADDRESS,
  value: "0x482B4f57D5692ac16e015027637cE275E9CE5Fab"
};
export const signerPrivateKey = {
  method: SignatureTypes.METHOD.ECDSA,
  privateKey:
    "0x7c8fdecee83f53c68a4213587b3dbe4316f7ed54d9325b19112e112849ac02dc"
};
