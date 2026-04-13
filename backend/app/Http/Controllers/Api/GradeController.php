<?php
namespace App\Http\Controllers\Api;
use App\Models\Grade;
use Illuminate\Http\Request;

class GradeController extends BaseController {
    public function index(Request $request) {
        try {
            $query = Grade::with(['student', 'course']);
            if ($request->has('student_id')) $query->where('student_id', $request->student_id);
            if ($request->has('course_id')) $query->where('course_id', $request->course_id);
            return $this->sendResponse($query->paginate($request->get('limit', 15)), 'Retrieved successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function store(Request $request) {
        try {
            $validated = $request->validate(['student_id' => 'required|exists:students,id', 'course_id' => 'required|exists:courses,id', 'score' => 'required|numeric']);
            return $this->sendResponse(Grade::create($validated), 'Created successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
    public function update(Request $request, $id) {
        try {
            $item = Grade::find($id);
            if (!$item) return $this->sendError('Not found');
            $item->update($request->all());
            return $this->sendResponse($item, 'Updated successfully');
        } catch (\Exception $e) { return $this->sendError($e->getMessage(), [], 500); }
    }
}