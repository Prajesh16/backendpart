function createSecret() {
  let secret = "Hidden Message";

  return {
    getSecret: () => secret,
    setSecret: (newSecret) => (secret = newSecret),
  };
}

const mySecret = createSecret();
console.log(mySecret.getSecret());
mySecret.setSecret("New Secret");
console.log(mySecret.getSecret());
