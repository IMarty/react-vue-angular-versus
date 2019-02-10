import { TestBed } from '@angular/core/testing';

import { TodoControllerService } from './todo-controller.service';

describe('TodoControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoControllerService = TestBed.get(TodoControllerService);
    expect(service).toBeTruthy();
  });
});
