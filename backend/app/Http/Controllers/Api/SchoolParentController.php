<?php
namespace App\Http\Controllers\Api;
use App\Models\SchoolParent;
use Illuminate\Http\Request;

class SchoolParentController extends BaseController {
    public function index(Request $request) {
        try {
            $query = SchoolParent::with(['user', 'students']);
            if ($request->has('search')) $query->whereHas('user', fn($q) => $q->where('name', 'like', '%'.$request->search.'%'));
            return $this->sendResponse($query->paginate($request->get('limit', 15)), 'Parents retrieved successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function store(Request $request) {
        try {
            $validated = $request->validate(['user_id' => 'required|exists:users,id', 'phone' => 'nullable|string', 'address' => 'nullable|string']);
            return $this->sendResponse(SchoolParent::create($validated), 'Parent created successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function show($id) {
        try {
            $item = SchoolParent::with(['user', 'students'])->find($id);
            if (!$item) return $this->sendError('Not found');
            return $this->sendResponse($item, 'Retrieved successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function update(Request $request, $id) {
        try {
            $item = SchoolParent::find($id);
            if (!$item) return $this->sendError('Not found');
            $item->update($request->all());
            return $this->sendResponse($item, 'Updated successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function destroy($id) {
        try {
            $item = SchoolParent::find($id);
            if (!$item) return $this->sendError('Not found');
            $item->delete();
            return $this->sendResponse([], 'Deleted successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
}