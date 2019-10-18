var EIP20 = artifacts.require("EIP20");

contract("EIP20", function(accounts) {
  it("should assert true", function(done) {
    var e_i_p20 = EIP20.deployed();
    assert.isTrue(true);
    done();
  });

  it("should return the balance of token owner", function() {
    var token;
    return EIP20.deployed().then(function(instance){
      token = instance;
      return token.balanceOf.call(accounts[0]);
    }).then(function(result){
      assert.equal(result.toNumber(), 1000000, 'balance is wrong');
    })
  });
});
