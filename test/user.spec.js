const expect = require('chai').expect
const userCore = require('../core/user-core')
const doubles = require('./helper/doubles')
const sinon = require('sinon')

describe('Mendaftar user baru', () => {
    it("Saat input benar dan sukses return 201", async () => {
      var req =  doubles.reqDoubles()
      var res = doubles.resDoubles()
      var userMock = doubles.modelMock()

      await userCore.create(req,res,userMock)
      expect(res.status().json.calledOnce).to.be.true
      expect(res.status.firstCall.calledWith(201)).to.be.true
    })

    it("Saat input salah dan gagal return 500", async () =>{
        var req =  doubles.reqDoubles()
        var res = doubles.resDoubles()
        var userMock = {
            create: sinon.stub().returns({
                toJSON: sinon.stub().returns(null)
            })
        }
  
        await userCore.create(req,res,userMock)
        expect(res.status.firstCall.calledWith(500))
    })
})

describe("Mendapatkan semua", () => {
     it('Saat input benar dengan respon berhasil return 200', async () => {
          var req = doubles.reqDoubles()
          var res = doubles.resDoubles()
          var userMock = doubles.modelMock()

          await userCore.getAll(req,res,userMock)

          expect(res.status().json.calledOnce).to.be.true
          expect(res.status.firstCall.calledWith(200)).to.be.true
     })

     it('Saat input salah dengan respon berhasil return 500', async () => {
        var req = doubles.reqDoubles()
        var res = doubles.resDoubles()
        var userMock = {
            findAll: sinon.stub().returns(false)
        }

        await userCore.getAll(req,res,userMock)

        expect(res.status().json.calledOnce).to.be.true
        expect(res.status.firstCall.calledWith(500)).to.be.true
     })
})
