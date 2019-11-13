import { EthereumPrivateKeyDecryptionProvider } from "@requestnetwork/epk-decryption";
import { EthereumPrivateKeySignatureProvider } from "@requestnetwork/epk-signature";
import { RequestNetwork } from "@requestnetwork/request-client.js";
import EthCrypto from "eth-crypto";

import {
  signerPrivateKey,
  decryptionKey,
  encryptionKey,
  createParams,
  signerIdentity
} from "./params";

(async () => {
  const requestnetwork = new RequestNetwork({
    signatureProvider: new EthereumPrivateKeySignatureProvider(
      signerPrivateKey
    ),
    decryptionProvider: new EthereumPrivateKeyDecryptionProvider(decryptionKey),
    useMockStorage: true
  });

  try {
    console.log("");
    console.log("Request Test");
    console.log("");

    const request = await requestnetwork._createEncryptedRequest(
      {
        requestInfo: createParams,
        signer: signerIdentity
      },
      [encryptionKey]
    );
    console.log(request);
  } catch (e) {
    console.error(e);
  }

  try {
    console.log("");
    console.log("Direct EthCrypto usage");
    console.log("");

    const encryptedData = await EthCrypto.encryptWithPublicKey(
      encryptionKey.key,
      EthCrypto.cipher.stringify("hello world")
    );
    const decryptedData = await EthCrypto.decryptWithPrivateKey(
      decryptionKey.key,
      EthCrypto.cipher.parse(encryptedData)
    );
    console.log(decryptedData);
  } catch (e) {
    console.error(e);
  }
})();
