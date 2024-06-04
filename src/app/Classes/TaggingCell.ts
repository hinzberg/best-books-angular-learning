

enum ValidationStatus {
  Incomplete = 1,
  Failed,
  Ok
}

export class TaggingCell {
    Value: string = "12345.76";
    Status : ValidationStatus = ValidationStatus.Incomplete;
}