export const E_MODEL_EXISTS = new Error(
    'Model registration failed: model already exists.',
);
export const E_UNINITIALIZED_GET = new Error(
    'State service failed: invoked getter for uninitialized property.',
);
export const E_NO_VIRTUAL_SET =
    'Modifications to the virtual property are not allowed.';
export const E_NO_VIRTUAL_DELETE =
    'Deletion of the virtual property is not allowed.';
