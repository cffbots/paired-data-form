import { Request, Response } from 'express';

import { Db } from './db';
import { Validator } from './validate';

function getDb(req: Request) {
    return req.app.get('db') as Db;
}

function getValidator(req: Request) {
    return req.app.get('validator') as Validator;
}

export function createProject(req: Request, res: Response) {
    const project = req.body;
    const validator = getValidator(req);
    if (!validator.validate(project)) {
        res.status(500);
        res.json(validator.errors);
        return;
    }
    const db = getDb(req);
    const project_id = db.createProject(project);
    const location = req.baseUrl + '/api/pending/projects/' + project_id;
    res.set('Location', location);
    res.status(201);
    res.json({'message': 'Created pending project', location});
}

export function listPendingProjects(req: Request, res: Response) {
    const db = getDb(req);
    res.json(db.listPendingProjects());
}

export function getPendingProject(req: Request, res: Response) {
    const db = getDb(req);
    const project_id = req.params.id;
    const project = db.getPendingProject(project_id);
    // if (!project) {
    //     res.status(404);
    //     const message = project_id + ' not found';
    //     res.json({message});
    // }
    res.json(project);
}

export function approveProject(req: Request, res: Response) {
    const db = getDb(req);
    const project_id = req.params.id;
    db.approveProject(project_id);
    const location = req.baseUrl + '/api/projects/' + project_id;
    res.set('Location', location);
    res.status(200);
    res.json({'message': 'Approved pending project', location});
}

export function denyProject(req: Request, res: Response) {
    const db = getDb(req);
    const project_id = req.params.id;
    db.denyProject(project_id);
    res.status(200);
    res.json({'message': 'Denied pending project'});
}

export function listProjects(req: Request, res: Response) {
    const db = getDb(req);
    res.json(db.listProjects());
}

export function getProject(req: Request, res: Response) {
    const db = getDb(req);
    const project_id = req.params.id;
    const project = db.getProject(project_id);
    // if (!project) {
    //     res.status(404);
    //     const message = project_id + ' not found';
    //     res.json({message});
    // }
    res.json(project);
}

export function getProjectHistory(req: Request, res: Response) {
    const db = getDb(req);
    const project_id = req.params.id;
    const history = db.projectHistory(project_id);
    res.json(history);
}

export function editProject(req: Request, res: Response) {
    const project = req.body;
    const validator = getValidator(req);
    if (!validator.validate(project)) {
        res.status(500);
        res.json(validator.errors);
        return;
    }
    const db = getDb(req);
    const project_id = req.params.id;
    const new_project_id = db.editProject(project_id, project);
    const location = req.baseUrl + '/api/pending/projects/' + new_project_id;
    res.set('Location', location);
    res.status(201);
    res.json({'message': 'Created pending project', location});
}
