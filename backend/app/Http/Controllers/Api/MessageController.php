<?php
namespace App\Http\Controllers\Api;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends BaseController {
    public function index(Request $request) {
        try {
            $query = Message::with(['sender', 'receiver']);
            if ($request->has('user_id')) {
                $query->where('sender_id', $request->user_id)->orWhere('receiver_id', $request->user_id);
            }
            return $this->sendResponse($query->orderBy('created_at', 'desc')->paginate($request->get('limit', 15)), 'Retrieved successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function store(Request $request) {
        try {
            $validated = $request->validate(['sender_id' => 'required|exists:users,id', 'receiver_id' => 'required|exists:users,id', 'content' => 'required|string']);
            return $this->sendResponse(Message::create($validated), 'Created successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function update(Request $request, $id) {
        try {
            $item = Message::find($id);
            if (!$item) return $this->sendError('Not found');
            $item->update(['is_read' => true]);
            return $this->sendResponse($item, 'Updated successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
}