export default function(state = [], action) {
  switch (action.type) {
    case 'create_data':
      return action.payload;
    case 'read_data':
      return action.payload;
    case 'payment_data':
      return action.payload;
    default:
      return state;
  }
}
