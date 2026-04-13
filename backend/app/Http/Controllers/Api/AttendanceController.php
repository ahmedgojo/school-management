<?php
namespace App\Http\Controllers\Api;
use App\Models\Attendance;
use Illuminate\Http\Request;

class AttendanceController extends BaseController {
    public function index(Request $request) {
        try {
            $query = Attendance::with(['student']);
            if ($request->has('student_id')) $query->where('student_id', $request->student_id);
            return $this->sendResponse($query->paginate($request->get('limit', 15)), 'Retrieved successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function store(Request $request) {
        try {
            $validated = $request->validate(['student_id' => 'required|exists:students,id', 'date' => 'required|date', 'status' => 'required|in:present,absent,late']);
            return $this->sendResponse(Attendance::create($validated), 'Created successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function update(Request $request, $id) {
        try {
            $item = Attendance::find($id);
            if (!$item) return $this->sendError('Not found');
            $item->update($request->all());
            return $this->sendResponse($item, 'Updated successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
}