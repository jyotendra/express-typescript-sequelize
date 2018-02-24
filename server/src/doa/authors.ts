import db from '@models/_index';
import { AuthorInstance } from '@models/authors';
import * as Bluebird from 'bluebird';

export function create(author: AuthorInstance): Bluebird<AuthorInstance> {
    return db.Author.create({
        Id: 1,
        FirstName: 'Surya',
        LastName: 'Reddy',
        Email: 'suryareddy@gmail.com'
    })
}

export function findAll(): Bluebird<AuthorInstance[]> {
    return db.Author.findAll({ include: [{ all: true }] })
}