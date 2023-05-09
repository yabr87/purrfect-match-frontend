export const formatUserTel = contactTel => {
  const tel = contactTel.split('');
  tel.splice(0, '', '+380 (');
  tel.splice(3, '', '-');
  tel.splice(7, '', '-');
  return tel.join('');
};
