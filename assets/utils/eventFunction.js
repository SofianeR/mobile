export const onChangeInputHandle = (
  value,
  stateObjectKey,
  stateToUpdate,
  setStateToUpdate,
) => {
  const copyStateToUpdate = {...stateToUpdate};
  copyStateToUpdate[stateObjectKey] = value;
  setStateToUpdate(copyStateToUpdate);
};
