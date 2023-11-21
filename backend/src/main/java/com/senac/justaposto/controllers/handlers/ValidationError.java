package com.senac.justaposto.controllers.handlers;

import java.util.ArrayList;
import java.util.List;

public class ValidationError extends StandardError {
<<<<<<< HEAD
	private static final long serialVersionUID = 1L;
	
	private List<FieldMessage> errors = new ArrayList<>();
	
	public List<FieldMessage> getErrors() {
		return errors;
	}

	public void addError(String fieldName, String message) {
		errors.add(new FieldMessage(fieldName, message));
	}
}





=======

    private List<FieldMessage> errors = new ArrayList<>();

    public List<FieldMessage> getErrors() {
        return errors;
    }

    public void addError(String fieldName, String message) {
        errors.add(new FieldMessage(fieldName, message));
    }
}
	
>>>>>>> 6064639d936377818ff59e401deca6084a9cb63b

