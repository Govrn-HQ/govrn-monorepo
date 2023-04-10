// 	// Handle
// 	// create
// 	// createMany
// 	// delete
// 	// deleteMany
// 	// update
// 	// upsert
//   if (params.model == 'Attestation' && params.action == 'delete') {
//     // Logic only runs for delete action and Post model
//   }

const middlwareHandle = () => {
 'create': {
	 callback: (params, next) => {
		 // update attestation threshold
	 }
 }
}
async (params, next) => {
  console.log('middleware', params, next);
	// Handle
	// create
	// createMany
	// delete
	// deleteMany
	// update
	// upsert
  if (params.model == 'Attestation' && params.action == 'delete') {
    // Logic only runs for delete action and Post model
  }
  return next(params);
}

