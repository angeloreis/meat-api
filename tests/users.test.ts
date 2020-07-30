import 'jest'
import * as request from 'supertest'

let address: string = 'http://localhost:3001'

test('get /users',()=>{
    return request(address)
    .get('/users')
    .then(response=>{
        expect(response.status).toBe(200)
        expect(response.body.items).toBeInstanceOf(Array)
    }).catch(fail)
    
})

test('post /user',()=>{
    return request(address)
            .post('/users')
            .send({
                name: 'Angelo dos Reis - Suporte Ar Sistemas',
                email: 'dev@arsistemas.com.br',
                password: '123456789',
                cpf: '975.559322-53'
            })
            .then(response=>{
                expect(response.status).toBe(200)
                expect(response.body._id).toBeDefined()
                expect(response.body.name).toBe('Angelo dos Reis - Suporte Ar Sistemas')
                expect(response.body.email).toBe('dev@arsistemas.com.br')
                expect(response.body.cpf).toBe('975.559322-53')
                expect(response.body.password).toBeUndefined()

            }).catch(fail)
})

test('get /users/aaaa - not found', ()=>{
    return request(address)
    .get('/users/aaaaaa')
    .then(response=>{
        expect(response.status).toBe(404)        
    }).catch(fail)
})

test('patch /users/:id', ()=>{
    return request(address)
            .post('/users')
            .send({
                name: 'Izalena Lopes de Sá - Financeiro da AR-Sistemas',
                email: 'financeiro@arsistemas.com.br',
                password: '123456789'                
            })
            .then(response => request(address)
                             .patch(`/users/${response.body._id}`)
                             .send({
                                 name: 'usuário2 - trocou no patch'
                             }))
            .then(response=> {
                expect(response.status).toBe(200)
                expect(response.body._id).toBeDefined()
                expect(response.body.name).toBe('usuário2 - trocou no patch')
                expect(response.body.email).toBe('financeiro@arsistemas.com.br')
                expect(response.body.password).toBeUndefined()
            })
           .catch(fail)
})