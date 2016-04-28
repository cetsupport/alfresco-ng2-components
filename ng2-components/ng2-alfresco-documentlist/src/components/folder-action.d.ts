/**
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { OnInit, EventEmitter } from 'angular2/core';
import { FolderActionList } from './folder-action-list';
import { FolderActionsService } from '../services/folder-actions.service';
export declare class FolderAction implements OnInit {
    private list;
    private folderActions;
    title: string;
    handler: string;
    execute: EventEmitter<{}>;
    constructor(list: FolderActionList, folderActions: FolderActionsService);
    ngOnInit(): void;
}
