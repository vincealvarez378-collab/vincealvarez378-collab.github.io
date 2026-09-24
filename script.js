"use strict";

/* =========================================================
   LEARNSHELF
   MAIN WEBSITE ENGINE
   ========================================================= */


/* =========================================================
   BOOK DATABASE
   ========================================================= */

const BOOKS = [
    universeBook,
    humanBodyBook,
    earthBook,
    physicsBook,
    chemistryBook,
    mathBook,
    biologyBook,
    computerScienceBook,
   environmentalScienceBook,
];

/* =========================================================
   APP STATE
   ========================================================= */

let currentBook = null;
let currentChapter = 0;

let currentCategory = "All";
let searchTerm = "";

let quizAnswers = [];
let quizScore = 0;


/* =========================================================
   DOM
   ========================================================= */

const libraryView = document.getElementById("libraryView");
const readerView = document.getElementById("readerView");
const quizView = document.getElementById("quizView");
const resultsView = document.getElementById("resultsView");
const reviewView = document.getElementById("reviewView");

const bookGrid = document.getElementById("bookGrid");
const bookCount = document.getElementById("bookCount");

const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");

const homeBtn = document.getElementById("homeBtn");
const backToLibrary = document.getElementById("backToLibrary");

const readerBookEmoji = document.getElementById("readerBookEmoji");
const readerBookTitle = document.getElementById("readerBookTitle");
const readerBookCategory = document.getElementById("readerBookCategory");

const tocList = document.getElementById("tocList");
const tocProgress = document.getElementById("tocProgress");

const chapterNumber = document.getElementById("chapterNumber");
const chapterTitle = document.getElementById("chapterTitle");
const chapterContent = document.getElementById("chapterContent");
const readingTime = document.getElementById("readingTime");

const previousChapterBtn = document.getElementById("previousChapter");
const nextChapterBtn = document.getElementById("nextChapter");
const markReadButton = document.getElementById("markReadButton");
const bookmarkBtn = document.getElementById("bookmarkBtn");

const quizTitle = document.getElementById("quizTitle");
const quizDescription = document.getElementById("quizDescription");
const quizForm = document.getElementById("quizForm");
const submitQuiz = document.getElementById("submitQuiz");

const resultsTitle = document.getElementById("resultsTitle");
const resultsScore = document.getElementById("resultsScore");
const resultsMessage = document.getElementById("resultsMessage");

const reviewList = document.getElementById("reviewList");

const reviewAnswersBtn = document.getElementById("reviewAnswers");
const retakeQuizBtn = document.getElementById("retakeQuiz");
const returnToBookBtn = document.getElementById("returnToBook");
const backToResultsBtn = document.getElementById("backToResults");


/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "learnShelfProgress";


function getStorage() {

    try {

        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || {};

    } catch {

        return {};

    }

}


function saveStorage(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function init() {

    setupEvents();

    renderLibrary();

    showOnly(libraryView);

}


/* =========================================================
   EVENTS
   ========================================================= */

function setupEvents() {

    searchInput.addEventListener(
        "input",
        function () {

            searchTerm = this.value
                .trim()
                .toLowerCase();

            renderLibrary();

        }
    );


    categoryFilters.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(".category");

            if (!button) return;

            document
                .querySelectorAll(".category")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            renderLibrary();

        }
    );


    homeBtn.addEventListener(
        "click",
        showLibrary
    );


    backToLibrary.addEventListener(
        "click",
        showLibrary
    );


    previousChapterBtn.addEventListener(
        "click",
        previousChapter
    );


    nextChapterBtn.addEventListener(
        "click",
        nextChapter
    );


    markReadButton.addEventListener(
        "click",
        markCurrentChapterAsRead
    );


    bookmarkBtn.addEventListener(
        "click",
        toggleBookmark
    );


    submitQuiz.addEventListener(
        "click",
        submitQuizHandler
    );


    reviewAnswersBtn.addEventListener(
        "click",
        reviewQuiz
    );


    retakeQuizBtn.addEventListener(
        "click",
        retakeQuiz
    );


    returnToBookBtn.addEventListener(
        "click",
        returnToBook
    );


    backToResultsBtn.addEventListener(
        "click",
        function () {

            showOnly(resultsView);

        }
    );


    document.addEventListener(
        "keydown",
        handleKeyboard
    );

}


/* =========================================================
   VIEW CONTROL
   ========================================================= */

function showOnly(view) {

    [
        libraryView,
        readerView,
        quizView,
        resultsView,
        reviewView
    ].forEach(section => {

        section.classList.add("hidden");

    });

    view.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function showLibrary() {

    showOnly(libraryView);

    currentBook = null;

    currentChapter = 0;

    renderLibrary();

}


/* =========================================================
   LIBRARY
   ========================================================= */

function renderLibrary() {

    const filteredBooks =
        BOOKS.filter(book => {

            const matchesCategory =
                currentCategory === "All" ||
                book.category === currentCategory;

            const searchableText = [

                book.title,

                book.description,

                book.category,

                ...(book.chapters || [])
                    .map(chapter => chapter.title)

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                !searchTerm ||
                searchableText.includes(searchTerm);


            return matchesCategory &&
                   matchesSearch;

        });


    bookGrid.innerHTML = "";


    filteredBooks.forEach(book => {

        bookGrid.appendChild(
            createBookCard(book)
        );

    });


    bookCount.textContent =
        `${filteredBooks.length} ${
            filteredBooks.length === 1
                ? "book"
                : "books"
        }`;

}


/* =========================================================
   BOOK CARD
   ========================================================= */

function createBookCard(book) {

    const card =
        document.createElement("article");

    card.className = "book-card";


    const progress =
        getBookProgress(book);


    card.innerHTML = `

        <div class="book-cover">

            <div class="book-emoji">
                ${book.emoji || "📚"}
            </div>

            <span class="book-category">
                ${escapeHTML(book.category || "Learning")}
            </span>

        </div>


        <div class="book-card-content">

            <h3>
                ${escapeHTML(book.title)}
            </h3>

            <p>
                ${escapeHTML(book.description || "")}
            </p>


            <div class="book-info">

                <span>
                    📖 ${book.chapters.length} chapters
                </span>

                <span>
                    ${progress}%
                </span>

            </div>


            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${progress}%"
                ></div>

            </div>


            <button class="open-book-button">

                ${
                    progress >= 100
                        ? "Read Again"
                        : progress > 0
                            ? "Continue Reading"
                            : "Start Reading"
                }

                →

            </button>

        </div>
    `;


    card
        .querySelector(".open-book-button")
        .addEventListener(
            "click",
            function () {

                openBook(book);

            }
        );


    card.addEventListener(
        "click",
        function (event) {

            if (
                event.target.closest(
                    ".open-book-button"
                )
            ) return;

            openBook(book);

        }
    );


    return card;

}


/* =========================================================
   OPEN BOOK
   ========================================================= */

function openBook(book) {

    currentBook = book;

    currentChapter =
        getSavedChapter(book);


    readerBookEmoji.textContent =
        book.emoji || "📚";

    readerBookTitle.textContent =
        book.title;

    readerBookCategory.textContent =
        book.category;


    renderTOC();

    renderChapter();

    showOnly(readerView);

}


/* =========================================================
   TABLE OF CONTENTS
   ========================================================= */

function renderTOC() {

    tocList.innerHTML = "";


    if (!currentBook) return;


    currentBook.chapters.forEach(
        (chapter, index) => {

            const button =
                document.createElement("button");

            button.className =
                "toc-item";


            if (index === currentChapter) {

                button.classList.add(
                    "active"
                );

            }


            if (
                isChapterComplete(
                    currentBook,
                    index
                )
            ) {

                button.classList.add(
                    "completed"
                );

            }


            button.innerHTML = `

                <span>
                    ${index + 1}
                </span>

                <strong>
                    ${escapeHTML(chapter.title)}
                </strong>

                ${
                    isChapterComplete(
                        currentBook,
                        index
                    )
                        ? "✓"
                        : ""
                }

            `;


            button.addEventListener(
                "click",
                function () {

                    currentChapter = index;

                    saveCurrentChapter();

                    renderTOC();

                    renderChapter();

                }
            );


            tocList.appendChild(button);

        }
    );


    updateProgress();

}


/* =========================================================
   RENDER CHAPTER
   ========================================================= */

function renderChapter() {

    if (!currentBook) return;


    const chapter =
        currentBook.chapters[
            currentChapter
        ];


    if (!chapter) return;


    chapterNumber.textContent =
        `Chapter ${currentChapter + 1} of ${
            currentBook.chapters.length
        }`;


    chapterTitle.textContent =
        chapter.title;


    chapterContent.innerHTML =
        formatChapterContent(
            chapter.content
        );


    const words =
        countWords(
            stripHTML(chapter.content)
        );


    const minutes =
        Math.max(
            1,
            Math.ceil(words / 220)
        );


    readingTime.textContent =
        `⏱ ${minutes} min read`;


    previousChapterBtn.disabled =
        currentChapter === 0;


    if (
        currentChapter ===
        currentBook.chapters.length - 1
    ) {

        nextChapterBtn.textContent =
            "Final Quiz →";

    } else {

        nextChapterBtn.textContent =
            "Next →";

    }


    updateBookmarkButton();

    updateReadButton();

    updateProgress();

}


/* =========================================================
   FORMAT CONTENT
   ========================================================= */

function formatChapterContent(content) {

    if (!content) {

        return "<p>Chapter content coming soon.</p>";

    }


    const paragraphs =
        content
            .trim()
            .split(/\n\s*\n/);


    return paragraphs
        .map(paragraph => {

            const clean =
                paragraph.trim();

            if (!clean) return "";

            return `<p>${escapeHTML(clean)}</p>`;

        })
        .join("");

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function nextChapter() {

    if (!currentBook) return;


    markCurrentChapterAsRead();


    if (
        currentChapter <
        currentBook.chapters.length - 1
    ) {

        currentChapter++;

        saveCurrentChapter();

        renderTOC();

        renderChapter();

        return;

    }


    showFinalQuiz();

}


function previousChapter() {

    if (!currentBook) return;


    if (currentChapter > 0) {

        currentChapter--;

        saveCurrentChapter();

        renderTOC();

        renderChapter();

    }

}


/* =========================================================
   READING PROGRESS
   ========================================================= */

function getBookProgress(book) {

    if (!book || !book.chapters.length) {
        return 0;
    }


    const storage =
        getStorage();


    const completed =
        storage[book.id]?.completedChapters || [];


    return Math.round(
        (
            completed.length /
            book.chapters.length
        ) * 100
    );

}


function updateProgress() {

    if (!currentBook) return;


    const progress =
        getBookProgress(
            currentBook
        );


    tocProgress.textContent =
        `${progress}%`;

}


function markCurrentChapterAsRead() {

    if (!currentBook) return;


    const storage =
        getStorage();


    if (!storage[currentBook.id]) {

        storage[currentBook.id] = {
            completedChapters: [],
            currentChapter: 0,
            bookmarks: []
        };

    }


    if (
        !storage[currentBook.id]
            .completedChapters
            .includes(currentChapter)
    ) {

        storage[currentBook.id]
            .completedChapters
            .push(currentChapter);

    }


    storage[currentBook.id]
        .currentChapter =
        currentChapter;


    saveStorage(storage);


    updateReadButton();

    updateProgress();

    renderTOC();

}


function updateReadButton() {

    if (!currentBook) return;


    if (
        isChapterComplete(
            currentBook,
            currentChapter
        )
    ) {

        markReadButton.textContent =
            "✓ Chapter Completed";

        markReadButton.classList.add(
            "completed"
        );

    } else {

        markReadButton.textContent =
            "Mark as Read";

        markReadButton.classList.remove(
            "completed"
        );

    }

}


function isChapterComplete(
    book,
    chapterIndex
) {

    const storage =
        getStorage();


    return Boolean(
        storage[book.id]
        ?.completedChapters
        ?.includes(chapterIndex)
    );

}


/* =========================================================
   SAVED CHAPTER
   ========================================================= */

function saveCurrentChapter() {

    if (!currentBook) return;


    const storage =
        getStorage();


    if (!storage[currentBook.id]) {

        storage[currentBook.id] = {
            completedChapters: [],
            currentChapter: 0,
            bookmarks: []
        };

    }


    storage[currentBook.id]
        .currentChapter =
        currentChapter;


    saveStorage(storage);

}


function getSavedChapter(book) {

    const storage =
        getStorage();


    const saved =
        storage[book.id]
        ?.currentChapter;


    if (
        typeof saved !== "number" ||
        saved < 0 ||
        saved >= book.chapters.length
    ) {

        return 0;

    }


    return saved;

}


/* =========================================================
   BOOKMARKS
   ========================================================= */

function toggleBookmark() {

    if (!currentBook) return;


    const storage =
        getStorage();


    if (!storage[currentBook.id]) {

        storage[currentBook.id] = {
            completedChapters: [],
            currentChapter: 0,
            bookmarks: []
        };

    }


    const bookmarks =
        storage[currentBook.id]
            .bookmarks || [];


    const position =
        bookmarks.indexOf(
            currentChapter
        );


    if (position === -1) {

        bookmarks.push(
            currentChapter
        );

    } else {

        bookmarks.splice(
            position,
            1
        );

    }


    storage[currentBook.id]
        .bookmarks =
        bookmarks;


    saveStorage(storage);


    updateBookmarkButton();

}


function updateBookmarkButton() {

    if (!currentBook) return;


    const storage =
        getStorage();


    const bookmarks =
        storage[currentBook.id]
            ?.bookmarks || [];


    const bookmarked =
        bookmarks.includes(
            currentChapter
        );


    bookmarkBtn.textContent =
        bookmarked
            ? "★ Bookmarked"
            : "☆ Bookmark";

}


/* =========================================================
   FINAL QUIZ
   ========================================================= */

function showFinalQuiz() {

    if (!currentBook) return;


    quizTitle.textContent =
        `${currentBook.title} — Final Quiz`;


    quizDescription.textContent =
        `Test what you learned from all ${
            currentBook.chapters.length
        } chapters.`;


    createQuiz();


    showOnly(quizView);

}


function createQuiz() {

    quizForm.innerHTML = "";

    quizAnswers = [];


    const questions =
        currentBook.quiz || [];


    questions.forEach(
        (question, index) => {

            const card =
                document.createElement("div");

            card.className =
                "quiz-question";


            let optionsHTML = "";


            question.options.forEach(
                (option, optionIndex) => {

                    optionsHTML += `

                        <label class="quiz-option">

                            <input
                                type="radio"
                                name="question-${index}"
                                value="${optionIndex}"
                            >

                            <span>
                                ${escapeHTML(option)}
                            </span>

                        </label>

                    `;

                }
            );


            card.innerHTML = `

                <div class="question-number">
                    Question ${index + 1}
                </div>

                <h3>
                    ${escapeHTML(
                        question.question
                    )}
                </h3>

                <div class="quiz-options">
                    ${optionsHTML}
                </div>

            `;


            quizForm.appendChild(card);

        }
    );

}


/* =========================================================
   SUBMIT QUIZ
   ========================================================= */

function submitQuizHandler() {

    if (!currentBook) return;


    const questions =
        currentBook.quiz || [];


    quizAnswers = [];


    let score = 0;


    questions.forEach(
        (question, index) => {

            const selected =
                document.querySelector(
                    `input[name="question-${index}"]:checked`
                );


            const answer =
                selected
                    ? Number(selected.value)
                    : null;


            quizAnswers.push(answer);


            if (
                answer ===
                question.answer
            ) {

                score++;

            }

        }
    );


    quizScore = score;


    markBookCompletedIfNeeded();


    renderQuizResults();

    showOnly(resultsView);

}


/* =========================================================
   QUIZ RESULTS
   ========================================================= */

function renderQuizResults() {

    const total =
        currentBook.quiz.length;


    resultsScore.textContent =
        `${quizScore} / ${total}`;


    const percentage =
        Math.round(
            (quizScore / total) * 100
        );


    if (percentage >= 90) {

        resultsTitle.textContent =
            "Excellent Work! 🏆";

        resultsMessage.textContent =
            "You have a strong understanding of this book.";

    } else if (percentage >= 70) {

        resultsTitle.textContent =
            "Great Job! 🎉";

        resultsMessage.textContent =
            "You understand many of the important ideas. Review a few topics to strengthen your knowledge.";

    } else if (percentage >= 50) {

        resultsTitle.textContent =
            "Good Effort! 📚";

        resultsMessage.textContent =
            "Reviewing the chapters will help you understand the material more deeply.";

    } else {

        resultsTitle.textContent =
            "Keep Learning! 💪";

        resultsMessage.textContent =
            "Don't worry. Use the review feature and return to the chapters you found difficult.";

    }

}


/* =========================================================
   REVIEW QUIZ
   ========================================================= */

function reviewQuiz() {

    if (!currentBook) return;


    reviewList.innerHTML = "";


    currentBook.quiz.forEach(
        (question, index) => {

            const userAnswer =
                quizAnswers[index];


            const correct =
                userAnswer ===
                question.answer;


            const item =
                document.createElement("div");


            item.className =
                `review-question ${
                    correct
                        ? "correct"
                        : "incorrect"
                }`;


            const userText =
                userAnswer === null
                    ? "No answer"
                    : question.options[
                        userAnswer
                    ];


            const correctText =
                question.options[
                    question.answer
                ];


            item.innerHTML = `

                <div class="review-number">
                    Question ${index + 1}
                </div>

                <h3>
                    ${escapeHTML(
                        question.question
                    )}
                </h3>

                <p>
                    <strong>Your answer:</strong>
                    ${escapeHTML(userText)}
                </p>

                <p>
                    <strong>Correct answer:</strong>
                    ${escapeHTML(correctText)}
                </p>

                <p class="explanation">
                    ${escapeHTML(
                        question.explanation || ""
                    )}
                </p>

            `;


            reviewList.appendChild(item);

        }
    );


    showOnly(reviewView);

}


/* =========================================================
   RETAKE
   ========================================================= */

function retakeQuiz() {

    showFinalQuiz();

}


/* =========================================================
   RETURN TO BOOK
   ========================================================= */

function returnToBook() {

    if (!currentBook) {

        showLibrary();

        return;

    }


    renderTOC();

    renderChapter();

    showOnly(readerView);

}


/* =========================================================
   COMPLETION
   ========================================================= */

function markBookCompletedIfNeeded() {

    if (!currentBook) return;


    const storage =
        getStorage();


    if (!storage[currentBook.id]) {

        storage[currentBook.id] = {
            completedChapters: [],
            currentChapter: 0,
            bookmarks: []
        };

    }


    currentBook.chapters.forEach(
        (_, index) => {

            if (
                !storage[currentBook.id]
                    .completedChapters
                    .includes(index)
            ) {

                storage[currentBook.id]
                    .completedChapters
                    .push(index);

            }

        }
    );


    saveStorage(storage);

}


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

function handleKeyboard(event) {

    if (
        !currentBook ||
        !readerView ||
        readerView.classList.contains(
            "hidden"
        )
    ) {

        return;

    }


    const active =
        document.activeElement;


    if (
        active &&
        (
            active.tagName === "INPUT" ||
            active.tagName === "TEXTAREA"
        )
    ) {

        return;

    }


    if (event.key === "ArrowRight") {

        nextChapter();

    }


    if (event.key === "ArrowLeft") {

        previousChapter();

    }

}


/* =========================================================
   UTILITIES
   ========================================================= */

function countWords(text) {

    if (!text) return 0;


    return text
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length;

}


function stripHTML(text) {

    const div =
        document.createElement("div");

    div.innerHTML =
        text || "";


    return div.textContent || "";

}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   START
   ========================================================= */

init();
