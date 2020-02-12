const sinon = require('sinon')

function reqDoubles() {
  return {
    body: {
      email: "aridwan05@gmail.com",
      username: "aridwan05",
      name: "arief ridwan",
      address: "kebon sirih",
      phone: "082139211979",
      password: "mypassword"
    }
  }
}

function resDoubles() {
  return {
    status: sinon.stub().returns({
      json: sinon.spy()
    })
  }
}


  function modelMock() {
    return {
      create: sinon.stub().returns({
        toJSON: sinon.stub().returns({
            email: "aridwan05@gmail.com",
            username: "aridwan05",
            name: "arief ridwan",
            address: "kebon sirih",
            phone: "082139211979",
            password: "mypassword"
        })
      }),
      findOne: sinon.stub().returns({
        then: sinon.stub().returns({
          catch: sinon.spy()
        })
      }),
      findAll: sinon.stub().returns(true),
      destroy: sinon.stub().returns({
        then: sinon.stub().returns({
          catch: sinon.spy()
        })
      }),
      update: sinon.stub().returns({
        then: sinon.stub().returns({
          catch: sinon.spy()
        })
      }),
    }
  }

  function responseMock(){
    return {
      toJSON: sinon.stub().returns({
        options: sinon.stub()
      }),
      map: sinon.spy()
    }
  }

module.exports = {
  reqDoubles,
  resDoubles,
  modelMock,
  responseMock
}
