const router = require('express').Router();
const {

    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController.js');
// /api/thought
router.route('/').get(getThoughts).post(createThought);
// /api/thought/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thought/:thoughtId/reactions

router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;