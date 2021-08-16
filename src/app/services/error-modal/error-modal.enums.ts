export enum EErrorModalContent {
  Unauthorized = 'Not authorize user',
  NotReviewed = 'You is not reviewed user',
  NotFreelancer = 'You\'re not a freelancer, can\'t get information about you',
  NotOwner = 'You\'re not a owner, can\'t get information about you',
  FailAddEducation = 'Failed to add education to freelancer',
  FailUpdateEducation = 'Failed to update education',
  FailDeleteEducation = 'Failed to delete education',
  FailUpdateDescription = 'Failed to update description',
  IdType = 'Id must be an integer',
  WrongRole = 'Wrong user role',
  WrongLanguage = 'Wrong language',
  ExistLanguage = 'This language is already exist',
  InvalidCode = 'Invalid secret code',
  ExistEmail = 'This email is already used',
  IncorrectEmailOrPassword = 'Incorrect email or password',
  IncorrectPassword = 'Incorrect password',
  NotHaveAccess = 'You no access',
  InvalidCategoryOrSub = 'Invalid category or subcategory',
  DbError = 'Server db error',
  InvalidCategory = 'Invalid category',
  InvalidLocation = 'Invalid location',
  InvalidOperation = 'Invalid operation mode',
  FileError = 'Error writing file',
  UndefinedProject = 'Undefined project',
  CanNotAddComment = 'Can not add comment',
  AlreadyFiredFreelancer = 'The freelancer has already been fired or is not on the project',
  UndefinedFreelancer = 'Undefined freelancer'
}

export enum EErrorModalView {
  Action = 'action',
  Info = 'info'
}
