export const selectIsLoading = ({ myPets }) => myPets.isLoading;
export const selectEvents = ({ myPets }) => myPets.events;
export const selectMyPetsError = ({ myPets }) => myPets.error || {};
