<?php
namespace App\Http\Controllers\Api;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends BaseController {
    public function index(Request $request) {
        try {
            $query = Notification::with(['user']);
            if ($request->has('user_id')) $query->where('user_id', $request->user_id);
            return $this->sendResponse($query->orderBy('created_at', 'desc')->paginate($request->get('limit', 15)), 'Retrieved successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function store(Request $request) {
        try {
            $validated = $request->validate(['user_id' => 'required|exists:users,id', 'title' => 'required|string', 'message' => 'nullable|string']);
            return $this->sendResponse(Notification::create($validated), 'Created successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function update(Request $request, $id) {
        try {
            $item = Notification::find($id);
            if (!$item) return $this->sendError('Not found');
            $item->update(['read' => true]);
            return $this->sendResponse($item, 'Updated successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
}