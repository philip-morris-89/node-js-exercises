import addFormat from "ajv-formats"
import { Validator, ValidationError } from "express-json-validator-middleware"
import { ErrorRequestHandler } from "express"

const validator = new Validator({
    coerceTypes: true
})

addFormat(validator.ajv, ["date-time"])
.addKeyword("kind")
.addKeyword("modifier")

export const validate = validator.validate

export const validationErrorMiddleware: ErrorRequestHandler = (error, request, response, next) => {
    if(error instanceof ValidationError){
        response.status(422).send({
            error: error.validationErrors
        })

        next()
    } else {
        next(error)
    }
}

export * from "./planet"